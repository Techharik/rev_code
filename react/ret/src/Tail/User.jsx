import React from "react";
import styles from './User.module.css'
import { Flex, Text, Button } from "@radix-ui/themes";

const User = () => {
    return <div className={styles.error_btn}>
        <div className="sm:bg-red-400 bg-green-800 grid grid-cols-3 gap-5 p-4  bg-contain">
            <div className="first:bg-amber-600">h</div>
            <div className="first:bg-amber-600">h</div>
            <div>h</div>
            <div className="last:bg-amber-600">h</div>

            <div className="last:bg-amber-600  relative inset-0">h</div>
        </div>


        <Flex direction="column" gap="2">
            <Text className="font-bold flex justify-center text-red-700 py-10">Hello from Radix Themes :)</Text>
            <Button className="!bg-red-800 !text-black " >Let's go</Button>
        </Flex>

    </div>;
};

export default User;
