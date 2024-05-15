import React from "react";
import Select from "react-select";

type OptionType = { value: string; label: string };
type Props = {
    options: any;
    instanceId: string;
    id: string;
    onChange: (selectedOptions: any) => void; // Define the type based on what react-select uses
};

// const transformOptions = (
//     options: Record<string, { value: string; label: string }[]>
// ) => {
//     return Object.keys(options).map((section) => ({
//         label: section,
//         options: options[section],
//     }));
// };

// const options = transformOptions(techOptions);

const MultiSelectComponent: React.FC<Props> = ({ options, instanceId, id }) => (
    <Select options={options} isMulti instanceId={instanceId} id={id} />
);

export default MultiSelectComponent;
