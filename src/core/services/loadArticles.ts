import { supabase } from "../Supabase/supabaseClient"

export const loadArticles = async (user_id: string) => {

    const { data, error } = await supabase
        .from('articles')
        .select()
        .eq("user_id", user_id)

    return {
        data,
        error
    }
}