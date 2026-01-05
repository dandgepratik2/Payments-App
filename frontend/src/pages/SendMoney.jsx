import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);

    return <div className="gradient-bg min-h-screen flex justify-center items-center p-4">
        <div className="w-full max-w-md">
            <div className="glass-card p-8 space-y-6">
                <div className="flex flex-col space-y-1.5">
                    <h2 className="text-3xl font-bold text-center text-glass-white">Send Money</h2>
                </div>
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 rounded-full glass-avatar flex items-center justify-center">
                            <span className="text-2xl text-white font-semibold">{name[0].toUpperCase()}</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-glass-white">{name}</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none text-glass-white flex items-center gap-2"
                                htmlFor="amount"
                            >
                                Amount (in Rs)
                            </label>
                            <input
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                }}
                                type="number"
                                className="flex h-12 w-full rounded-lg glass-input px-4 py-3 text-base"
                                id="amount"
                                placeholder="Enter amount"
                            />
                        </div>
                        <button onClick={() => {
                            axios.post("http://localhost:3000/api/v1/account/transfer", {
                                to: id,
                                amount
                            }, {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            })
                        }} className="w-full vibrant-button rounded-lg text-base font-semibold h-12 px-4 py-3">
                            Initiate Transfer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}