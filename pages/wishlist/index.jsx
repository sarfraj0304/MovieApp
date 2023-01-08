import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Watchlist = () => {
  const [data, setData] = useState();
  const getData = () => {
    return axios
      .get(`http://localhost:8080/wishlists`)
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = (id) => {
    try {
      const res = axios.delete(`http://localhost:8080/wishlists/${id}`);
      alert("Sucessfully Removed");
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Watchlist</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Table w="70%" m="auto" mt="20px">
        <Thead>
          <Tr>
            <Th>S.NO.</Th>
            <Th>IMAGE</Th>
            <Th>TITLE</Th>
            <Th>RELEASED</Th>
            <Th>RATING</Th>
            <Th>LANGUAGE</Th>
            <Th>DELETE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((el, i) => (
            <Tr key={el.id}>
              <Td>{i + 1}</Td>
              <Td width="15%">
                <Image width="100%" src={el.Images[2]} alt="img"></Image>
              </Td>
              <Td>{el.Title}</Td>
              <Td width="20%">{el.Released}</Td>
              <Td>{el.imdbRating}</Td>
              <Td>{el.Language}</Td>
              <Td>
                <Button
                  onClick={() => {
                    handleDelete(el.id);
                  }}
                  colorScheme="red"
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default Watchlist;