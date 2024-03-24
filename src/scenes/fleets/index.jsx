import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockFleetData } from "../../data/mockData";

const Fleets = () => {
	const theme = useTheme();

	const colors = tokens(theme.palette.mode);

	const columns = [
		{ field: "id", headerName: "ID" },
		{
			field: "make",
			headerName: "Make",
			// flex: 0.5,
		},
		{
			field: "image",
			headerName: "Image",
			renderCell: ({ row: { image } }) => {
				return (
					<Box
						width={"100%"}
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							padding: "10px 0",
							// border: "2px solid #fff",
						}}>
						<img
							src={image}
							alt='Fleet_Image'
							style={{
								cursor: "pointer",
								borderRadius: "10px",
								width: "60%",
								aspectRatio: 1 / 1,
							}}
						/>
					</Box>
				);
			},
		},
		{
			field: "model",
			headerName: "Model",
		},
		{
			field: "year",
			headerName: "Year",
		},
		{
			field: "licensePlate",
			headerName: "Plate No.",
		},
		{
			field: "vin",
			headerName: "VIN",
			flex: 1,
		},
		{
			field: "fuelType",
			headerName: "Fuel Type",
		},
		{
			field: "mileage",
			headerName: "Mileage",
		},
		{
			field: "status",
			headerName: "Status",
			flex: 1,
			renderCell: ({ row: { status } }) => {
				return (
					<Box
						sx={{
							padding: "8px 15px",
							borderRadius: "5px",
							width: "80%",
							margin: "auto 0",
							textAlign: "center",
						}}
						backgroundColor={
							status === "Active"
								? colors.greenAccent[800]
								: colors.redAccent[800]
						}>
						<Typography
							color={
								status === "Active"
									? colors.greenAccent[200]
									: colors.redAccent[200]
							}>
							{status}
						</Typography>
					</Box>
				);
			},
		},
		{
			field: "location",
			headerName: "Location",
			flex: 1,
		},
		{
			field: "lastMaintenance",
			headerName: "Last Maintained",
			flex: 1,
		},
	];
	return (
		<Box p='0 20px'>
			<Header
				title={"Fleets"}
				subtitle={"Total Fleets available"}
			/>

			<Box
				m='40px 0 0 0'
				height='75vh'
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderBottom: "none",
						// border: "2px solid #fff",
					},
					"& .name-column--cell": {
						color: colors.greenAccent[300],
					},
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: colors.blueAccent[700],
						borderBottom: "none",
					},
					"& .MuiDataGrid-virtualScroller": {
						backgroundColor: colors.primary[400],
					},
					"& .MuiDataGrid-footerContainer": {
						borderTop: "none",
						backgroundColor: colors.blueAccent[700],
					},
					"& .MuiCheckbox-root": {
						color: `${colors.greenAccent[200]} !important`,
					},
					"& .MuiDataGrid-row": {
						padding: "10px 0 !important",
						maxHeight: "80px !important",
						minHeight: "80px !important",
					},
				}}>
				<DataGrid
					rows={mockFleetData}
					columns={columns}
				/>
			</Box>
		</Box>
	);
};

export default Fleets;
