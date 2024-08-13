//prepare our camera and microphone for the meeting
import {
    DeviceSettings,
    VideoPreview,
    useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
    setIsSetupComplete,
}: {
    setIsSetupComplete: (value: boolean) => void;
}) => {
    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
    const call = useCall();
    if (!call)
        throw new Error("usecall must be used within StreamCall component");
    useEffect(() => {
        if (isMicCamToggledOn) {
            call?.camera.disable();
            call?.microphone.disable();
        } else {
            call?.camera.enable();
            call?.microphone.enable();
        }
    }, [isMicCamToggledOn, call?.camera, call?.microphone]);

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
            <h1 className="text-2xl font-bold">Setup</h1>
            {/* New container to limit the width and align content */}
            <div className="flex flex-col items-center w-full max-w-md">
                <div className="flex flex-col items-center justify-center w-full">
                    {/* Added max height to VideoPreview */}
                    <VideoPreview className="w-full max-h-64" />
                </div>
                <div className="flex flex-col w-full items-center gap-3">
                    <label className="flex items-center justify-center gap-2 font-medium pt-1">
                        <input
                            type="checkbox"
                            checked={isMicCamToggledOn}
                            onChange={(e) =>
                                setIsMicCamToggledOn(e.target.checked)
                            }
                        />
                        Join with mic and camera off
                    </label>
                    <DeviceSettings />
                </div>
            </div>
            <Button
                className="rounded-md bg-green-500 px-4 py-2.5"
                onClick={() => {
                    call.join();
                    setIsSetupComplete(true);
                }}
            >
                Join Meeting
            </Button>
        </div>
    );
};

export default MeetingSetup;