import { categories } from "../data/categories"

const Form = () => {
    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoría:</label>
                <select id="category" className="border border-slate-300 p-2 rounded-lg w-full bg-white">
                    {categories.map(category =>(
                        <option 
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity" className="font-bold">Actividad:</label>
                <input
                    id="activity"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Ej: Comida, Jugo de naranja, Ensaladas, Ejercicio, etc"
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input
                    id="calories"
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Ej: 300, 500"
                />
            </div>

            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
                value='Guardar comida o ejercicio'
            />
        </form>
    )
}

export default Form
