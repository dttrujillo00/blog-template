import { supabase } from "../Supabase/supabaseClient"

export const loadArticles = async () => {

    const { data, error } = await supabase
        .from('articles')
        .select()

    return {
        data,
        error
    }
}