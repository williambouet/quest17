export class User {
    name: string;
    role: string;
    connection: boolean;

    constructor(private userName: string, private userRole: string, private userConnection: boolean) {
        this.name = this.userName;
        this.role = this.userRole;
        this.connection = this.userConnection;
    }
}
