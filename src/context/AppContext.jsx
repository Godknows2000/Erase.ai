import { useAuth } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [credit, setCredit] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const {getToken} = useAuth()

    const loadCreditsData = async () => {
        try {
            const token = await getToken(); // Fetch the token
            console.log('Token:', token);
    
            const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
                headers: { token },
            });
    
            if (data.success) {
                setCredit(data.creditBalance);
                console.log('Credit Balance:', data.creditBalance);
            }
        } catch (error) {
            console.error('Failed to load credits:', error.message);
            toast.error('Unable to fetch credits. Please try again later.');
        }
    };    

    const value = {
        credit,setCredit,loadCreditsData,backendUrl
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider