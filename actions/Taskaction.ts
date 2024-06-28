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

export const GetEntry = async () =>
    {
      try{
        const entries = await
        db.task.findMany();
        return entries;
    } catch (error){
        console.error("error getting data from database",error);

        throw new Error("error getting data from database");
    }
};
export const DeleteEntry = async (id: string) =>
    {
      try{
        const result = await
        db.task.delete({
            where:{
                id,
            },
        })
        return result;
    } catch (error){
        console.error("error deleting data from database",error);

        throw new Error("error deleting data from database");
    }
};
