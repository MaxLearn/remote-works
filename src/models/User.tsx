import { Experience } from "./Experiences";


export interface User {

__v: Number,

_id: String,

applications: Array<String>,

country: String,

email: String,

experiences: Array<Experience>,

first_name: String,

git_url: String,

last_name: String,

permissionFlags: Number,

timezone: String,

website: String

}