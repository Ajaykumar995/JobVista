import { setAllAdminJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, { 
                    withCredentials: true 
                });
                
                // 👇 DEBUG LOG: What is the backend sending?
                console.log("🔍 ADMIN JOBS RESPONSE:", res.data); 

                if (res.data.success) {
                    dispatch(setAllAdminJobs(res.data.jobs));
                }
            } catch (error) {
                console.log("🔥 ERROR FETCHING JOBS:", error);
            }
        }
        fetchAllAdminJobs();
    }, []);
}

export default useGetAllAdminJobs;