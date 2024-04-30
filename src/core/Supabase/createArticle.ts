import { supabase } from "./supabaseClient"

interface ArticleData {
    title: string,
    description: string;
    user_id: string,
    author: string,
    main_image_path: string
}

export const createNewArticle = async({title, description, user_id, author, main_image_path}: ArticleData) => {

    const { error } = await supabase
        .from('articles')
        .insert({ description, title, user_id, main_image_path, author })

    if (error) {
        console.log(error)
    } else {
        console.log("Creacion exitosa")
    }
}