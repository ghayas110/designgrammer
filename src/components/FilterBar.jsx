// components/FilterBar.js
const FilterBar = ({ onSearch }) => {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex gap-4">
                <button className="border px-4 py-2 rounded-md">
                    Sort by: Recently Accessed
                </button>
                <button className="border px-4 py-2 rounded-md">Categories</button>
                <button className="border px-4 py-2 rounded-md">Progress</button>
                <button className="border px-4 py-2 rounded-md">Instructor</button>
                <button className="text-gray-500">Reset</button>
            </div>
            <input
                type="text"
                placeholder="Search my courses"
                className="border px-4 py-2 rounded-md"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default FilterBar;
