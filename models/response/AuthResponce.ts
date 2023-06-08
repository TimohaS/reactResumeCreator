import {IUser} from '../iUser';

export interface AuthResponce {
    accesToken: string;
    refreshToken: string;
    user: IUser;
}