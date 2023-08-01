// module
import { AxiosInstance, AxiosResponse } from "axios"
// custom
import useBaseService from "./base-service"

const useCrudService = <EntityModel, EntityCreateModel, EntityUpdateModel>() => {
    const baseService: AxiosInstance = useBaseService();

    const Create = (
        apiUri: string,
        data: EntityCreateModel
    ): Promise<AxiosResponse<EntityModel>> => {
        return baseService.post(`/${apiUri}`, data);
    };

    const Get = (
        apiUri: string
    ): Promise<AxiosResponse<EntityModel>> => {
        return baseService.get(`/${apiUri}`);
    };

    const Update = (
        apiUri: string,
        data: EntityUpdateModel
    ): Promise<AxiosResponse<EntityModel>> => {
        return baseService.put(`/${apiUri}`, data);
    };

    const GetList = (
        apiUri: string,
        payload?: Record<string, string | number | boolean | object>
    ): Promise<AxiosResponse<Array<EntityModel>>> => {
        return baseService.post(`/${apiUri}`, payload);
    };

    const Delete = (
        apiUri: string
    ): Promise<AxiosResponse<any>> => {
        return baseService.delete(`/${apiUri}`);
    };

    return { Create, Update, Get, GetList, Delete, baseService };
}

export default useCrudService;