import { JwtPayload } from "jwt-decode";

export interface Token extends JwtPayload{
    name:string;
}