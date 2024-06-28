"use server";
import {db} from "@/lib/db";

export const CreateEntry = async (name: string, isCompleted: boolean) =>
    {
      try{
        const result = await
        db.task.create({
            data:{
                name,
                isCompleted,
            },
        });
        return result;
    } catch (error){
        console.error("error adding data to database",error);

        throw new Error("error adding data to database");
    }
};

