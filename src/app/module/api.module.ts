import { environment } from 'src/environments/environment';


export const API_POINTS = {
    END_POINT : environment.API_ENDPOINT,
    login : environment.API_ENDPOINT+'api/login',
    addBlog : environment.API_ENDPOINT+'api/addBlogDetails'
}