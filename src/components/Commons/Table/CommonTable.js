import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Checkbox, Drawer } from "@mui/material";
import DBLink from "@/components/ReUse/DBLink";
import Link from "next/link";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import DBInput from "@/components/ReUse/DBInput";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import CloseIcon from "@mui/icons-material/Close";

import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Image from "next/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CommonTable = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [isDrawerOpen, setIsdrawerOpen] = useState(false);

  const handleCloseDrawer = () => {
    setIsdrawerOpen(false);
  };

  return (
    <>
      <div className="common__table">
        <div className="table__header">
          {/* search */}
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>

          {/* button */}
          <div className="right">
            {/* item */}
            <div className="item">
              <Button className="bg__btn" onClick={() => setIsdrawerOpen(true)}>
                <FilterAltIcon />
                Filter
              </Button>

              <Drawer anchor="right" open={isDrawerOpen}>
                <Box width="400px" role="presentation">
                  <div className="table__filter">
                    <div className="header d_flex d_justify">
                      <div className="close" onClick={handleCloseDrawer}>
                        <CloseIcon />
                      </div>
                      <h3>Filter</h3>
                    </div>

                    <div className="table__form">
                      <div className="custom__input">
                        <label>Code Product</label>
                        <input type="text" placeholder="Search by product" />
                      </div>

                      <div className="custom__input">
                        <label>Code Product</label>
                        <input type="text" placeholder="Search by product" />
                      </div>

                      <div className="custom__input">
                        <label>Category</label>
                        <select name="">
                          <option value="">Option 1</option>
                          <option value="">Option 2</option>
                          <option value="">Option 3</option>
                          <option value="">Option 4</option>
                        </select>
                      </div>

                      <div className="custom__input">
                        <label>Brand</label>
                        <select name="">
                          <option value="">Option 1</option>
                          <option value="">Option 2</option>
                          <option value="">Option 3</option>
                          <option value="">Option 4</option>
                        </select>
                      </div>
                    </div>

                    <div className="duel__button">
                      <Button className="bg__btn">
                        <FilterAltIcon />
                        Filter
                      </Button>
                      <Button className="bg__btn">
                        <RotateLeftIcon /> Reset
                      </Button>
                    </div>
                  </div>
                </Box>
              </Drawer>
            </div>

            {/* item */}
            <div className="item">
              <Button className="bg__btn">
                <DescriptionIcon />
                Pdf
              </Button>
            </div>

            <div className="item">
              <Button className="bg__btn">
                <DescriptionIcon />
                Excel
              </Button>
            </div>

            <div className="item">
              <Button className="bg__btn">
                <FileDownloadIcon />
                Import Product
              </Button>
            </div>

            <div className="item">
              <Button className="bg__btn">
                <AddIcon />
                Create
              </Button>
            </div>
          </div>
        </div>

        <div className="table__content">
          <table>
            <thead>
              <tr>
                <th align="left">
                  <Checkbox {...label} />
                </th>
                <th align="center">Image</th>
                <th align="center">Type</th>
                <th align="center">Name</th>
                <th align="center">Code</th>
                <th align="center">Brand</th>
                <th align="center">Category</th>
                <th align="center">Cost</th>
                <th align="center">Price</th>
                <th align="center">Unit</th>
                <th align="center">Quantity</th>
                <th align="right">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td align="left">
                  <Checkbox {...label} />
                </td>

                <td align="center">
                  <div className="table__img">
                    <Image
                      src="/images/Orange-1.jpg"
                      height="40"
                      width="40"
                      alt="table-img"
                    />
                  </div>
                </td>

                <td align="center">Single</td>

                <td align="center">Orange</td>
                <td align="center">80256894</td>
                <td align="center">N/D</td>
                <td align="center">Fruits</td>
                <td align="center">19.00</td>
                <td align="center">23.00</td>
                <td align="center">pc</td>
                <td align="center">94 pc</td>
                <td align="right">
                  <div className="table__action">
                    <Link href="">
                      <RemoveRedEyeIcon />
                    </Link>
                    <Link href="">
                      <BorderColorIcon />
                    </Link>
                    <Link href="">
                      <DeleteIcon />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pagination__part">
          <div className="rows__per__page">
            <h6>Rows per page:</h6>
            <select name="">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
            </select>
          </div>

          {/* pagination__item */}
          <div className="pagination__item">
            <h6>1 - 10 of 10</h6>
            <button>
              <SkipPreviousIcon />
            </button>
            <button className="second">
              <ArrowBackIosIcon />
            </button>
            <button className="third">
              <ArrowForwardIosIcon />
            </button>
            <button>
              <SkipNextIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonTable;
