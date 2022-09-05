type UserModel = {
  userId: number;
  name: string;
  email: string;
  password?: string;
}

declare module Express {
    export interface Request {
      token: string;
      user: UserModel;
    }
  }
  