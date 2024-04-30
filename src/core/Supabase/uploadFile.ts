import { supabase } from "./supabaseClient"



export const uploadFile = async (file: File, user_id: string, article_title: string) => {

    const { data, error } = await supabase.storage.from('article_images').upload(`/${user_id}/main_images/${article_title}`, file)
    if (error) {
        console.log(error)
    } else {
        // Handle success
        console.log(data)
    }
}