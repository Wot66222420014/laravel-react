import BootstrapLayout from "@/layouts/BootstrapLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Counternumber: React.FC = () => {
    const [count, setCount] = useState<number>(0); // กำหนดประเภทของ state เป็น number

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <BootstrapLayout>
            <Head title="Counter Number" />
            <div className="container">
                <h2>Counter Number</h2>
                <p>Current Count: {count}</p>
                <button onClick={increment} className="btn btn-success">Increment</button>
                <button onClick={decrement} className="btn btn-danger">Decrement</button>
            </div>
        </BootstrapLayout>
    );
};

export default Counternumber;