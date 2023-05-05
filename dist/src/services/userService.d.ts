declare class UserService {
    private userRepository;
    constructor();
    getAll(): Promise<any>;
    getById(id: any): Promise<any>;
    register(user: any): Promise<void>;
    find(email: any): Promise<any>;
    checkLogin(user: any): Promise<any>;
    updateName(id: any, name: any): Promise<void>;
    updateAvatar(id: any, avatar: any): Promise<void>;
    updateBackground(id: any, background: any): Promise<void>;
}
declare const _default: UserService;
export default _default;
