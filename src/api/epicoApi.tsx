import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://epico.gob.ec/ce_rest_des/servicio';

const EpicoApi = axios.create({ baseURL });

EpicoApi.interceptors.request.use(
    async(config : any) => {
        // const token = await AsyncStorage.getItem('token');
        // if ( token ) {
            config.headers['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NTA1MjYwMDYsImlzcyI6e30sIm5iZiI6MTY1MDUyNjAwNiwiZHRhIjp7ImlkIjo4MDEsInVzdWFyaW8iOiJjb25zdGFudGluby5pc2FpYXNAbWFpbC5jb20iLCJmZWNoYV9jcmVhY2lvbiI6IjIwMjAtMDctMDMgMDE6MDQ6MjkiLCJub21icmUiOiJDT05TVEFOVElOTyBJU0FJQVMiLCJhcGVsbGlkbyI6Ik1PU1FVRVJBIEFWSUxBIiwiY29ycmVvIjoiY29uc3RhbnRpbm8uaXNhaWFzQG1haWwuY29tIiwiaWRfaW5zdGl0dWNpb24iOjIsImVzdGFkbyI6IkEiLCJmb3RvIjpudWxsLCJwYXNzd29yZCI6IiIsImxhc3RfYWNjZXNzIjpudWxsLCJmb3RvX2Jhbm5lciI6bnVsbCwiaWRfcGVyc29uYSI6MTA2NSwicGFzc3dvcmQyIjoiIiwiaWRfZW1wcmVuZGVkb3IiOm51bGwsImlkX3VzdWFyaW8iOjgwMSwidXJsX2ZvdG8iOm51bGwsInVybF9mb3RvX2Jhbm5lciI6bnVsbCwiaWRfYXNpc3RlbnRlX3RlY25pY28iOm51bGwsImlkX21lbnRvciI6bnVsbCwiZW1wcmVuZGVkb3IiOjEsIm1lc2Ffc2VydmljaW8iOjAsIm1lbnRvciI6MCwiYXNpc3RlbmNpYV90ZWNuaWNhIjowLCJhZG1pbmlzdHJhZG9yIjowLCJzdXBlcnZpc29yUHJvdmVlZG9yIjowLCJhc2Vzb3IiOjAsImluc2NyaXBjaW9uZXMiOlt7ImlkX2luc2NyaXBjaW9uIjoxMiwiZXN0YWRvX2luc2NyaXBjaW9uIjoiQSIsImZhc2UiOjEsImlkX2VtcHJlbmRpbWllbnRvIjpudWxsLCJub21icmVfY29tZXJjaWFsIjpudWxsLCJub21icmVfZW1wcmVuZGltaWVudG8iOm51bGwsInJ1Y19lbXByZW5kaW1pZW50byI6bnVsbCwicmF6b25fc29jaWFsX2VtcHJlbmRpbWllbnRvIjpudWxsfV19fQ.eP3_xaKc5yRPo0tvzI__EXRqcSkSj7vFZqEIFSuN30rVju-opVtxbAeW5YSOwqFrJYn33qzf8kK0MLh0-bchFA';
        // }
        return config;
    }
);


export default EpicoApi;
