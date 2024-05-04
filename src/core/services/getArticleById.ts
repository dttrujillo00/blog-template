import { supabase } from "../Supabase/supabaseClient"

export const getArticleById = async (articleTitle: string, user_id: string) => {
    const { data, error } = await supabase
        .from('articles')
        .select()
        .eq("user_id", user_id)
        .eq("title", articleTitle)

    return { data, error }
}