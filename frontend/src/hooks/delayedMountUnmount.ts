import { useEffect, useState } from "react";

export function DelayedMountUnmount(time: number) {
    const [state, setState] = useState("unmounted");
    const show = () => {
        if (state === "unmounting") {
            return;
        }
        setState("mounting");
    };
    const hide = () => {
        if (state === "mounting") {
            return;
        }
        setState("unmounting");
    };
    const hideNow = () => {
        setState("unmounted");
    }

    useEffect(() => {
        let timeoutId: any;
        if (state === "unmounting") {
            timeoutId = setTimeout(() => {
                setState("unmounted");
            }, time);
        } else if (state === "mounting") {
            timeoutId = setTimeout(() => {
                setState("mounted");
            }, time);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [state, time]);

    return [state, show, hide, hideNow, setState];
}