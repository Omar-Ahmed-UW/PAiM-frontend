import React, { useState } from "react";
import ButtonWithLoading from "../components/button-loading";
import dynamic from "next/dynamic";
import techOptions from "../../public/techOptions.json";
const AsyncSelect = dynamic(() => import("react-select"), { ssr: false });

const transformOptions = (options: any) => {
    return Object.entries(options).map(([section, values]: any) => ({
        label: section,
        options: values.map((item: any) => ({
            label: item.label,
            value: item.value,
        })),
    }));
};

export default function Home() {
    console.log(process.env.BASE_URL);
    const [selectedTechStack, setSelectedTechStack] = useState([]);

    const handleTechStackChange = (selectedOptions: any) => {
        setSelectedTechStack(
            selectedOptions.map((option: { value: string }) => option.value)
        );
        console.log("selected options are ", selectedOptions);
        console.log("selected tech stack is ", selectedTechStack);
    };

    const options = transformOptions(techOptions);

    const validateForm = () => {
        const ideaDescription =
            (document.getElementById("idea-description") as HTMLInputElement)
                ?.value || "";
        const timelineNumber =
            (document.getElementById("timeline-number") as HTMLInputElement)
                ?.value || "";
        const timelineUnit =
            (document.getElementById("timeline-unit") as HTMLInputElement)
                ?.value || "";

        if (!ideaDescription || !timelineNumber || !timelineUnit) {
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            alert("Please fill in all required fields.");
            return { success: false };
        }
        const ideaName =
            (document.getElementById("idea-name") as HTMLInputElement)?.value ||
            "";
        const ideaDescription =
            (document.getElementById("idea-description") as HTMLInputElement)
                ?.value || "";
        const ideaUsers =
            (document.getElementById("idea-users") as HTMLInputElement)
                ?.value || "";

        const timelineNumber =
            (document.getElementById("timeline-number") as HTMLInputElement)
                ?.value || "";

        const timelineUnit =
            (document.getElementById("timeline-unit") as HTMLInputElement)
                ?.value || "";
        const formData = {
            ideaName,
            ideaDescription,
            ideaUsers,
            timeline: {
                number: timelineNumber,
                unit: timelineUnit,
            },
            techStack: selectedTechStack,
        };

        console.log("our form data is ", formData);
        try {
            console.log("our base url is ", process.env.NEXT_PUBLIC_BASE_URL);
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/GeneratePage`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                console.log("Submission successful");
                return { success: true };
            } else {
                console.error("Submission failed");
                return { success: false };
            }
        } catch (error) {
            console.error("submission failed");
            return { success: false };
        }
    };
    return (
        // set this to center right in the middle of the page

        <div
            className="font-mono flex flex-col justify-start min-h-screen text-center mb-20"
            data-theme="lofi"
        >
            <div className="text-5xl mt-8 space-y-4">
                <h1 className="mt-4">PAiM 🧠👷🏽‍♂️</h1>
                <h2>Welcome to your AI PM</h2>
            </div>
            <form className="mt-20 w-full max-w-xs self-center space-y-5">
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">IDEA NAME (OPTIONAL)</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Ex: Pizza Planet App"
                        className="input input-bordered"
                        id="idea-name"
                    />
                </label>

                <label className="form-control">
                    <div className="label">
                        {/* how can i add below a part of the label text to be greyed out or look faint */}
                        <span className="label-text">
                            DESCRIBE YOUR IDEA IN A FEW SENTENCES
                        </span>
                    </div>
                    <textarea
                        className="textarea textarea-bordered h-32 w-full"
                        placeholder="Ex: I want to build a platform that helps..."
                        id="idea-description"
                        required
                    ></textarea>
                </label>

                <label className="form-control">
                    <div className="label">
                        {/* how can i add below a part of the label text to be greyed out or look faint */}
                        <span className="label-text">
                            DESCRIBE YOUR USERS (OPTIONAL)
                        </span>
                    </div>
                    <textarea
                        className="textarea textarea-bordered h-32 w-full"
                        placeholder="Ex: My users are people who..."
                        id="idea-users"
                    ></textarea>
                </label>

                <label className="join join-horizontal form-control">
                    <div className="label">
                        <span className="label-text">SELECT YOUR TIMELINE</span>
                    </div>
                    <input
                        type="number"
                        placeholder="Enter number"
                        className="input input-bordered input-sm w-1/2"
                        min="0"
                        max="500"
                        id="timeline-number"
                        required
                    />
                    <select
                        className="select select-bordered select-sm w-1/2"
                        id="timeline-unit"
                        required
                    >
                        <option>days</option>
                        <option>weeks</option>
                        <option>months</option>
                    </select>
                </label>
                {/* add multiselect component */}
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">
                            SELECT YOUR TECH STACK (OPTIONAL)
                        </span>
                    </div>
                    <AsyncSelect
                        options={options}
                        isMulti
                        onChange={handleTechStackChange}
                    />
                </label>
                {/* <button type="submit">button</button> */}

                <ButtonWithLoading onSubmit={handleSubmit}>
                    Submit
                </ButtonWithLoading>
            </form>
        </div>
    );
}
