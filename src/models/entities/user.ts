// custom
import BaseEntity from "./base-entity";

interface UserEntity extends BaseEntity {
    name: string
    lastName: string
    age: number
}

export default UserEntity

export interface UserCreate {
    name: string
    lastName: string
    age: number
}

export interface UserUpdate {
    name: string
    lastName: string
}