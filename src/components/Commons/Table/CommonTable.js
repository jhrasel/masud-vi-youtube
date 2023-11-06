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
import CancelIcon from "@mui/icons-material/Cancel";

import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

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
                        <CancelIcon />
                      </div>
                      <h3>Table Drawer</h3>
                    </div>

                    <div className="table__form">
                      <DBInput label="Date" type="date" />
                      <DBInput label="Refarence" type="text" />
                      <DBInput label="Refarence" type="text" />
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

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <Checkbox {...label} />
                </TableCell>
                <TableCell align="left">Data</TableCell>
                <TableCell align="center">Reference</TableCell>
                <TableCell align="center">Customer</TableCell>
                <TableCell align="center">Warehouse</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center"> Grand Total</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {/* item */}
              <TableRow>
                <TableCell align="left">
                  <Checkbox {...label} />
                </TableCell>

                <TableCell align="left">2023-10-20</TableCell>

                <TableCell align="center">
                  <DBLink url="" name="QT__115" />
                </TableCell>

                <TableCell align="center">Jafrul Hasan Rasel</TableCell>
                <TableCell align="center">Warehouse 1</TableCell>
                <TableCell align="center">
                  <h6 className="send">Sent</h6>
                </TableCell>
                <TableCell align="center">320.00</TableCell>
                <TableCell align="right">
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
                </TableCell>
              </TableRow>

              {/* item */}
              <TableRow>
                <TableCell align="left">
                  <Checkbox {...label} />
                </TableCell>

                <TableCell align="left">2023-10-20</TableCell>

                <TableCell align="center">
                  <DBLink url="" name="QT__115" />
                </TableCell>

                <TableCell align="center">Jafrul Hasan Rasel</TableCell>
                <TableCell align="center">Warehouse 1</TableCell>
                <TableCell align="center">
                  <h6 className="send">Sent</h6>
                </TableCell>
                <TableCell align="center">320.00</TableCell>
                <TableCell align="right">
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
                </TableCell>
              </TableRow>

              {/* item */}
              <TableRow>
                <TableCell align="left">
                  <Checkbox {...label} />
                </TableCell>

                <TableCell align="left">2023-10-20</TableCell>

                <TableCell align="center">
                  <DBLink url="" name="QT__115" />
                </TableCell>

                <TableCell align="center">Jafrul Hasan Rasel</TableCell>
                <TableCell align="center">Warehouse 1</TableCell>
                <TableCell align="center">
                  <h6 className="panding">Panding</h6>
                </TableCell>
                <TableCell align="center">320.00</TableCell>
                <TableCell align="right">
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
                </TableCell>
              </TableRow>

              {/* item */}
              <TableRow>
                <TableCell align="left">
                  <Checkbox {...label} />
                </TableCell>

                <TableCell align="left">2023-10-20</TableCell>

                <TableCell align="center">
                  <DBLink url="" name="QT__115" />
                </TableCell>

                <TableCell align="center">Jafrul Hasan Rasel</TableCell>
                <TableCell align="center">Warehouse 1</TableCell>
                <TableCell align="center">
                  <h6 className="send">Sent</h6>
                </TableCell>
                <TableCell align="center">320.00</TableCell>
                <TableCell align="right">
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
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

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
              <SkipPreviousIcon /> Prev
            </button>
            <button>
              Next <SkipNextIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonTable;
