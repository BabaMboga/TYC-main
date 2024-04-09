import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const [launchTime, setLaunchTime] = useState(false):
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("12/31/2024 23:59:59");

        const interval = setInterval(() => {
            const now = new Date ();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference/ (1000*60*60*24));
            setDays(d);

            const h = Math.floor((difference% (1000*60*60*24)) / (1000*60*60));
            setHours(h);

            const m = Math.floor((difference % (1000*60*60)) / (1000*60));
            setMinutes(m);

            
        })
    })
}