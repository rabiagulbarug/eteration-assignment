import {useState} from "react";

interface ProductSortByProps {
    onSortChange: (column: string, direction: string) => void;
}

export  const ProductSortBy = ({ onSortChange }: ProductSortByProps) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);

        let sortBy: string;
        let sortOrder: string;

        switch (option) {
            case 'old-new-date':
                sortBy = 'createdAt';
                sortOrder = 'asc';
                break;
            case 'new-old-date':
                sortBy = 'createdAt';
                sortOrder = 'desc';
                break;
            case 'high-low-price':
                sortBy = 'price';
                sortOrder = 'desc';
                break;
            case 'low-high-price':
                sortBy = 'price';
                sortOrder = 'asc';
                break;
            default:
                sortBy = 'createdAt';
                sortOrder = 'desc';
        }

        onSortChange(sortBy, sortOrder);
    };

    return (
        <div className="w-full bg-white border p-5 h-[220px] overflow-hidden shadow-lg mb-4">
            <div className="flex flex-row mb-4">
                <span className="text-sm font-semibold">Sort</span>
            </div>
            <div className="flex flex-col mb-4">
                <label className="inline-flex items-center p-2">
                    <input
                        type="radio"
                        value="option1"
                        checked={selectedOption === 'old-new-date'}
                        onChange={() => handleOptionChange('old-new-date')}
                        className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span className="ml-2 text-sm">Old to new</span>
                </label>

                <label className="inline-flex items-center p-2">
                    <input
                        type="radio"
                        value="option2"
                        checked={selectedOption === 'new-old-date'}
                        onChange={() => handleOptionChange('new-old-date')}
                        className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span className="ml-2 text-sm">New to old</span>
                </label>

                <label className="inline-flex items-center p-2">
                    <input
                        type="radio"
                        value="option3"
                        checked={selectedOption === 'high-low-price'}
                        onChange={() => handleOptionChange('high-low-price')}
                        className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span className="ml-2 text-sm">Price high to low</span>
                </label>

                <label className="inline-flex items-center p-2">
                    <input
                        type="radio"
                        value="option4"
                        checked={selectedOption === 'low-high-price'}
                        onChange={() => handleOptionChange('low-high-price')}
                        className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span className="ml-2 text-sm">Price low to high</span>
                </label>
            </div>
        </div>
    );
};
