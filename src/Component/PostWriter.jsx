import React, { useEffect, useState } from "react";
import style from "./PostWriter.module.css";
import {
  Button,
  useDisclosure,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Checkbox,
  Stack,
  ModalFooter,
  Flex,
  Spacer,
  CircularProgressLabel,
  CircularProgress,
  Textarea,
  ButtonGroup,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Image,
} from "@chakra-ui/react";
import { myAction } from "../Redux/Action";
import { useDispatch } from "react-redux";
import axios from "axios";

import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const PostWriter = () => {
  let loginuser = localStorage.getItem("papa");
  const [content, setContent] = useState({
    description: "",
    image: "",
    Likes: 0,
    Comments: 0,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, changetext] = useState("");
  const [lang, setLang] = useState(["English"]);
  const [charCount, setcharCount] = useState(0);
  const [token, setToken] = useState(localStorage.getItem("userToken"));
  const [imageUrl, setImageUrl] = useState(null);

  async function addDataJson() {
    try {
      let dataUser = await getLoggedInUser();
      // console.log(dataUser);
      let data = await axios.post("https://clear-jeans-slug.cyclic.app/api/posts", {
        UserId: dataUser._id,
        name: dataUser.name,
        description: content.description,
        image: imageUrl,
        likes: [],
        comments: [],
      });
      console.log(data);
      closeWriter();
    } catch (error) {
      console.log(error);
    }
  }

  function langCheck() {
    let eng = document.getElementById("English");
    let hin = document.getElementById("हिन्दी");
    let kan = document.getElementById("ಕನ್ನಡ");
    let tam = document.getElementById("தமிழ்");
    let tel = document.getElementById("తెలుగు");
    let mar = document.getElementById("मराठी");
    let ben = document.getElementById("বাংলা");

    let langArr = [eng, hin, kan, tam, tel, mar, ben];
    let newarr = [];
    langArr.map((elem) => {
      if (elem.checked) {
        newarr.push(elem.value);
        setLang([...newarr]);
      }
    });

    onClose();
  }

  async function translateFunc(targetlang) {
    console.log(targetlang);
    try {
      const res = await axios.post(`https://clear-jeans-slug.cyclic.app/api/translate`, {
        input: text,
        fromLang: "en",
        toLang: targetlang,
      });
      console.log(res);
      setContent({ ...content, description: res.data });
      // console.log(content);
      document.getElementById("feedbox").value = res.data;
    } catch (error) {
      console.log(error);
    }
  }

  function countCharacter() {
    let post = text.length;
    setcharCount(post);
  }

  useEffect(() => {
    countCharacter();
  });

  async function getLoggedInUser() {
    try {
      let data = await axios.post("https://clear-jeans-slug.cyclic.app/api/verify", {
        token,
      });
      return data.data.user;
    } catch (e) {
      console.log(e);
    }
  }

  let dispatch = useDispatch();
  const closeWriter = () => {
    myAction(dispatch, false);
  };

  async function cloudinaryImageGenrator(e) {
    try {
      const data = new FormData();
      let image = e.target.files[0];
      data.append("file", image);
      data.append("upload_preset", "kooappcom");
      data.append("cloud_name", "dlcg72ieo");
      let raw = await axios.post(
        "https://api.cloudinary.com/v1_1/dlcg72ieo/image/upload",
        data
      );
      setImageUrl(raw.data.url);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box px="2%" py="5%" h={"100vh"} bg="#E8E8E3">
      <Modal isOpen={isOpen} size={"xs"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Languages</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={1}>
              <Checkbox defaultChecked id="English"  value={"English"}>
                <div style={{display:"flex", justifyContent:"space-between", gap:"50%", alignItems:"center", width:"100%"}}><h3>English</h3>    <h3>English</h3></div>
              </Checkbox>
              <br />
              <Checkbox id="हिन्दी" value={"हिन्दी"}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"50%", width:"100%"}}><h3>हिन्दी</h3>   <h3>Hindi</h3></div>
              </Checkbox>
              <br />
              <Checkbox id="ಕನ್ನಡ" value={"ಕನ್ನಡ"}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"50%", width:"100%"}}><h3>ಕನ್ನಡ</h3> <h3>Kannada</h3></div>
              </Checkbox>
              <br />
              <Checkbox id="தமிழ்" value={"தமிழ்"}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"50%", width:"100%"}}><h3>தமிழ்</h3> <h3>Tamil</h3></div>
              </Checkbox>
              <br />
              <Checkbox id="తెలుగు" value={"తెలుగు"}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"50%", width:"100%"}}><h3>తెలుగు</h3><h3>Telegu</h3> </div>
              </Checkbox>
              <br />
              <Checkbox id="मराठी" value={"मराठी"}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"50%", width:"100%"}}><h3>मराठी</h3> <h3>Marathi</h3></div>
              </Checkbox>
              <br />
              <Checkbox id="বাংলা" value={"বাংলা"}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"50%", width:"100%"}}><h3>বাংলা</h3> <h3>Bengali</h3></div>
              </Checkbox>
              <br />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button px={150} colorScheme="blue" mr={1} onClick={langCheck}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box bg="#fff" borderRadius={20} background="#F8F7F3">
        <Flex mx={8} pt={5} alignItems="center">
          <Flex gap={5}>
            <i
              onClick={closeWriter}
              class="fa-solid fa-arrow-left-long fa-lg"
            ></i>
            <i id="style.fa-solid" class="fa-solid fa-user fa-lg"></i>
          </Flex>
          <Spacer />
          <Button
            onClick={addDataJson}
            size={"sm"}
            bg="#809B9D"
            color={"white"}
          >
            {" "}
            <div>
              <i class="fa-regular fa-paper-plane"></i> Post
            </div>{" "}
          </Button>
        </Flex>

        <Flex alignItems="center" gap={5} mx={8} mt={4}>
          <Button
            colorScheme={"white"}
            color={"black"}
            size={"xs"}
            onClick={onOpen}
          >
            <i class="fa-solid fa-plus"></i>
          </Button>
          {lang.map((elem, id) => {
            return (
              <Button
                onClick={(e) => {
                  translateFunc(e.target.value);
                }}
                key={id + 1}
                value={id == 0 ? "en" : "hi"}
                borderRadius={50}
                size="sm"
              >
                {elem}
              </Button>
            );
          })}
        </Flex>

        <Textarea
          _focusVisible={false}
          id="feedbox"
          maxLength={500}
          onChange={(e) => {
            setContent({ ...content, description: e.target.value });
            changetext(e.target.value);
          }}
          mt={3}
          size="md"
          bg={"#fff"}
          borderTopRadius="10"
          borderBottomRadius={0}
          resize={"none"}
          rows="15"
          fontWeight={"500"}
          placeholder="What's on your mind?"
        />

        <Flex alignItems="center" mt={4} mx="5" pb={3}>
          <Flex alignItems={"center"} gap={"25%"}>
            <input
              type={"file"}
              id="firstImage"
              onChange={cloudinaryImageGenrator}
              style={{ display: "none" }}
              accept=" image/jpg"
            />
            <label style={{ cursor: "pointer" }} htmlFor="firstImage">
              <i class="fa-regular fa-images"></i>
            </label>

            {imageUrl ? (
              <Popover>
                <PopoverTrigger>
                  <button
                    style={{
                      fontSize: "1%",
                      padding: "2%",
                      border: "2px solid black",
                      borderRadius: "5px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Preview
                  </button>
                </PopoverTrigger>
                <PopoverContent boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
                  <PopoverArrow />
                  <PopoverBody p={"3%"}>
                    <Image
                      m={"auto"}
                      borderRadius={"10px"}
                      src={imageUrl}
                      alt="Preview Image"
                    />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ) : (
              <></>
            )}
            <label style={{ cursor: "pointer" }} htmlFor="">
              <i class="fa-solid fa-play"></i>
            </label>
            <label style={{ cursor: "pointer" }} htmlFor="">
              <i class="fa-solid fa-link"></i>
            </label>
            <label style={{ cursor: "pointer" }} htmlFor="">
              <i class="fa-solid fa-square-poll-vertical"></i>
            </label>
          </Flex>

          <Spacer />
          <Flex alignItems="center" gap={2}>
            <Box>
              <i class="fa-solid fa-gear"></i>
            </Box>
            |
            <Box>
              <CircularProgress
                max={500}
                value={charCount}
                size="30px"
                color="green"
              >
                <CircularProgressLabel>{charCount}</CircularProgressLabel>
              </CircularProgress>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default PostWriter;
