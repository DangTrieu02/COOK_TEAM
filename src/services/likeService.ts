import AppDataSource from "../data-source";
import {Like} from "../entity/like";

class LikeService {
    private likeRepository;

    constructor() {
        this.likeRepository = AppDataSource.getRepository(Like)
    }

    getLikeToPost = async (postId) => {
        //    let isLike =  await this.likeRepository.find({
        //         relations : {
        //             post:true
        //         }, where:{
        //             userId:userId,
        //             postId:postId,
        //
        //         }
        //     })
        // }
        const sqlQuery = `select count(isLiked) as 'totalLike'
                          from \`like\`
                          where postId = ?
                            and isLiked = 1`;
        const postLike = await this.likeRepository.query(sqlQuery, [postId]);
        return postLike
    }
    findUserIdandPostId =async (userId, postId)=>{
       let postLike = await this.likeRepository.findOneOrFail({
            where: { user: userId, post: postId },
        });
        return postLike[0]
    }
}


export default new LikeService()