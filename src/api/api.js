import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '3b43da83-7b96-4bf9-ae22-a831e541d3e3'
    }
});

export class UserAxios {
    static getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }

    static unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }

    static follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}

export class ProfileAxios {
    static getProfile(id) {
        return instance.get(`profile/${id}`);
    }

    static getStatus(id) {
        return instance.get(`profile/status/${id}`);
    }

    static updateStatus(status) {
        return instance.put(`profile/status`, {status});
    }

    static setPhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData,{
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    }
    static saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}

export class AuthorAxios {
    static autMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }

    static login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`,{email, password, rememberMe, captcha})
            .then(response => response.data)
    }

    static logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}

export class SecurityAxios {
    static getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data)
    }
}




