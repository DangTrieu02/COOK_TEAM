declare class UserService {
    private userRepository;
    constructor();
    getAll(): Promise<any>;
    getById(id: any): Promise<any>;
    register(user: any): Promise<void>;
    find(email: any): Promise<any>;
    checkLogin(user: any): Promise<any>;
}
declare const _default: UserService;
export default _default;
