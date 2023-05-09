import AppDataSource from "../data-source";
import { Post } from "../entity/post";
import { In } from "typeorm";

class PostService {
  private postRepository;

  constructor() {
    this.postRepository = AppDataSource.getRepository(Post);
  }

  async getPost(user, isHasFriend) {
    if (isHasFriend) {
      console.log(123);

      return await this.postRepository.query(`
            SELECT DISTINCT p.*, u.name , u.avatar, l.*
            FROM post p
            JOIN user u ON p.id = u.id
            JOIN friend f ON p.id = f.id  OR p.userId = f.friendId and f.status='bạn bè'
            JOIN likepost l ON p.id = l.postId 
            WHERE u.id = ${user} OR (f.userId = ${user} OR f.friendId = ${user})
            ORDER BY p.time DESC;
            `);
    } else {
      console.log(456);

      //   return  this.postRepository.query(`
      //         select post.* , user.name, user.avatar from post
      //         join user on post.userId = user.id
      //         join likepost l on l.postId = post.id
      //         where post.userId = ${user}`);
      let a = await this.postRepository
        .createQueryBuilder("post")
        .leftJoinAndSelect("post.likes", "likes")
        .where(`post.userId = ${user}`)
        .getMany();
      console.log(a);
      return a;
    }
  }

  getAllPost = async (UserId) => {
    let posts = await this.postRepository.find({
      relations: {
        user: true,
        likes: true,
      },
      where: {
        user: {
          id: In([UserId, 4]),
        },
      },
    });
    return posts;
  };

  getPostToUser = async (UserId) => {
    let post = await this.postRepository.find({
      relations: {
        user: true,
        likes: true,
      },
      where: {
        user: {
          id: UserId,
        },
      },
    });
    return post;
  };

  addPost = async (post) => {
    await this.postRepository.save(post);
  };

  updatePost = async (id, updateNow) => {
    await this.postRepository.update({ id: id }, updateNow);
  };
  removePost = async (id) => {
    await this.postRepository.delete({ id: id });
  };
}

export default new PostService();
