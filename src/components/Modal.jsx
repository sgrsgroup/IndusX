import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import JoyModal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import VerifiedIcon from "@mui/icons-material/Verified";

import { jobs } from "../constants";

export default function Modal({
  src,
  role,
  description,
  about,
  salary,
  future,
  companies,
}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [layout, setLayout] = React.useState("center");

  const openModal = () => {
    setLayout("center");
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const maxLines = 2;

  return (
    <>
      <Card>
        <CardMedia sx={{ height: 220 }} image={src} title={role} />
        <CardContent>
          <div className="flex gap-1 items-center absolute top-0 right-0 z-2 bg-jobs-bg text-sm px-4 text-bold">
            <p>NASSCOM Certified</p>
            <VerifiedIcon sx={{ fontSize: 16, color: "green" }} />
          </div>
          <Typography gutterBottom variant="h5" component="div">
            {role}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: maxLines,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </Typography>

          <Button onClick={openModal}>
            Know More
          </Button>
        </CardContent>
      </Card>
      {modalVisible && (
        <JoyModal
          open={!!layout}
          onClose={() => {
            setLayout(undefined);
            closeModal();
          }}
        >
          <ModalDialog layout={layout}>
            <ModalClose />
            <DialogTitle sx={{ fontWeight: "bold" }}>
              {role.toUpperCase()}
            </DialogTitle>
            <DialogContent
              sx={{
                overflow: "auto",
                height: "100%",
                "&::-webkit-scrollbar": { width: "2px" },
                "&::-webkit-scrollbar-thumb": { background: "#888" },
              }}
            >
              <style>
                {`
      ul {
        list-style-type: disc;
        padding-left: 40px; /* Adjust padding as needed */
      }
      li {
        color: black;
      }
      p
      {
        color: black;
      }
      h1
      {
        color: black;
        font-weight: bold;
      }
      .companies{
        padding-left: 20px;
      }
      .companies-list{
        padding-left: 60px;
      }
    `}
              </style>
              <div>
                <p>{description}</p>
                <br />
                <img src={src} alt="" />
                <br />
                <h1>What they do?</h1>
                <ul>
                  {about.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
                <br />
                <h1>Salary Range</h1>
                <ul>
                  {salary.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
                <br />
                <h1>Future Prospect</h1>
                {future.description && <p>{future.description}</p>}
                {future.reasons && future.reasons.length > 0 && (
                  <ul>
                    {future.reasons.map((data, index) => (
                      <li key={index}>{data}</li>
                    ))}
                  </ul>
                )}
                <br />
                <h1>Companies Hiring for {role}</h1>
                {companies.description && <p>{companies.description}</p>}
                <h1 className="companies">Indian Companies</h1>
                {companies.indian && companies.indian.length > 0 && (
                  <ul className="companies-list">
                    {companies.indian.map((data, index) => (
                      <li key={index}>{data}</li>
                    ))}
                  </ul>
                )}
                <h1 className="companies">Global Companies</h1>
                {companies.global && companies.global.length > 0 && (
                  <ul className="companies-list">
                    {companies.global.map((data, index) => (
                      <li key={index}>{data}</li>
                    ))}
                  </ul>
                )}
              </div>
            </DialogContent>
          </ModalDialog>
        </JoyModal>
      )}
    </>
  );
}
