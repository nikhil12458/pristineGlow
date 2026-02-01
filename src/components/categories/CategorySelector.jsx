
const CategorySelector = ({cat, setCat}) => {

  return (
    <div className="catSelector">
      <select
        name="Categories"
        id="catTag"
        value={cat}
        onChange={(e) => setCat(e.target.value)}
      >
        <option value="">Categories</option>
        <option value="new-year">New Year</option>
        <option value="diwali">Diwali</option>
        <option value="christmas">Christmas</option>
        <option value="valentine">Valentine</option>
        <option value="holi">Holi</option>
        <option value="birthday">Birthday</option>
      </select>
    </div>
  );
};

export default CategorySelector;
