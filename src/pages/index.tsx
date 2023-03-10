import Head from "next/head";
import Header from "@/components/Header";
import { Container, Content } from "@/styles/styles";
import Card from "@/components/Cards";
import Footer from "@/components/Footer";
import Skeleton from "@/components/Skeleton";
import { useEffect, useState } from "react";
import api from "@/service/api";
import { addProduct } from "@/features/cartMenu";
import { useDispatch } from "react-redux";

export interface ProductsProps {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    qtd: number;
}

export default function Home() {
    const [products, setProducts] = useState<ProductsProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    async function getProducts() {
        await api
            .get("/products", {
                params: {
                    page: 1,
                    rows: 8,
                    sortBy: "id",
                    orderBy: "DESC",
                },
            })
            .then((response) => {
                setProducts(response.data.products);
                setIsLoading(false);
            });
    }

    function handleOnClick(item: ProductsProps) {
        dispatch(addProduct(item));
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container>
            <Head>
                <title>Mks Frontend Challenge</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Header data-testid="header" />
            <>
                {isLoading ? (
                    <Content data-testid="skeletons">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Content>
                ) : (
                    <Content data-testid="cards">
                        {products.map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                title={item.name}
                                description={item.description}
                                image={item.photo}
                                price={parseInt(item.price).toLocaleString(
                                    "pt-BR"
                                )}
                                event={() => {
                                    handleOnClick(item);
                                }}
                            />
                        ))}
                    </Content>
                )}
            </>
            <Footer data-testid="footer" />
        </Container>
    );
}
