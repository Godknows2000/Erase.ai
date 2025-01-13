import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [credit, setCredit] = useState(false)

    const [image, setImage] = useState(false)

    const [resultImage,setResultImage] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate()

    const {getToken} = useAuth()

    const {isSignedIn} = useUser()

    const {openSignIn} = useClerk()

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

    const removeBackground = async (image) => {
        try{
            if(!isSignedIn){
                return openSignIn()
            }
            setImage(image)
            setResultImage(false)

            navigate('/imageresult')

            const token = await getToken()

            const formData = new FormData()
            image && formData.append('image', image)


            const {data} = await axios.post(backedUrl+'/api/image/remove-background', formData, {
                headers: {token}
            })

            if(data.success){
                setResultImage(data.resultImage)
                data.creditBalance && setCredit(data.creditBalance)
            } else{
                toast.error(data.message)
                data.creditBalance && setCredit(data.creditBalance)
                if(data.creditBalance === 0)
                    navigate('/subscription')
            }

            console.log(image)
        } catch (error){
            console.error(error.message);
            toast.error(error.message);
        }
    }

    const value = {
        credit,setCredit,loadCreditsData,backendUrl,image,setImage,removeBackground,resultImage,setResultImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider