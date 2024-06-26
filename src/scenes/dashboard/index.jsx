import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import PieChart from "../../components/PieChart";

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m='20px'>
			{/* HEADER */}
			<Box
				display='flex'
				justifyContent='flex-end'
				alignItems='center'
				textAlign={"right"}>
				<Header
					title='FLEET MANAGEMENT SYSTEM'
					subtitle='Welcome to your dashboard'
				/>

				{/* <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box> */}
			</Box>

			{/* GRID & CHARTS */}
			<Box
				display='grid'
				gridTemplateColumns='repeat(12, 1fr)'
				gridAutoRows='180px'
				gap='20px'>
				{/* ROW 1 */}
				<Box
					gridColumn='span 3'
					backgroundColor={colors.primary[400]}
					display='flex'
					alignItems='center'
					justifyContent='center'
					borderRadius={5}
					sx={{
						border: `1px solid ${colors.blueAccent["100"]}`,
					}}>
					<StatBox
						title='1,361'
						subtitle="Active Fleet's"
						progress='0.75'
						increase='+14%'
						icon={
							<DirectionsCarFilledOutlinedIcon
								sx={{ color: colors.greenAccent[600], fontSize: "32px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn='span 3'
					backgroundColor={colors.primary[400]}
					display='flex'
					alignItems='center'
					justifyContent='center'
					borderRadius={5}
					sx={{
						border: `1px solid ${colors.blueAccent["100"]}`,
					}}>
					<StatBox
						title='431,225'
						subtitle='Net Revenue'
						progress='0.50'
						increase='+21%'
						icon={
							<PointOfSaleIcon
								sx={{ color: colors.greenAccent[600], fontSize: "32px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn='span 3'
					backgroundColor={colors.primary[400]}
					display='flex'
					alignItems='center'
					justifyContent='center'
					borderRadius={5}
					sx={{
						border: `1px solid ${colors.blueAccent["100"]}`,
					}}>
					<StatBox
						title='32,441'
						subtitle='New Clients'
						progress='0.30'
						increase='+5%'
						icon={
							<PersonAddIcon
								sx={{ color: colors.greenAccent[600], fontSize: "32px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn='span 3'
					backgroundColor={colors.primary[400]}
					display='flex'
					alignItems='center'
					justifyContent='center'
					borderRadius={5}
					sx={{
						border: `1px solid ${colors.blueAccent["100"]}`,
					}}>
					<StatBox
						title='1,325,134'
						subtitle='Traffic Request'
						progress='0.80'
						increase='+43%'
						icon={
							<TrafficIcon
								sx={{ color: colors.greenAccent[600], fontSize: "32px" }}
							/>
						}
					/>
				</Box>

				{/* ROW 2 */}
				<Box
					gridColumn='span 8'
					gridRow='span 3'
					backgroundColor={colors.primary[400]}
					borderRadius={5}
					sx={{
						border: `1px solid ${colors.blueAccent["100"]}`,
					}}>
					<Box
						mt='25px'
						p='0 30px'
						display='flex '
						justifyContent='space-between'
						alignItems='center'>
						<Box>
							<Typography
								variant='h5'
								fontWeight='600'
								color={colors.grey[100]}>
								Revenue Generated
							</Typography>
							<Typography
								variant='h3'
								fontWeight='bold'
								color={colors.greenAccent[500]}>
								$59,342.32
							</Typography>
						</Box>
						{/* <Box>
							<IconButton>
								<DownloadOutlinedIcon
									sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
								/>
							</IconButton>
						</Box> */}
					</Box>
					<Box
						height='80%'
						// flex={1}
						// m='-20px 0 0 0'
					>
						<LineChart isDashboard={true} />
					</Box>
				</Box>
				<Box
					gridColumn='span 4'
					gridRow='span 3'
					backgroundColor={colors.primary[400]}
					padding={2}
					borderRadius={5}
					sx={{
						border: `1px solid ${colors.blueAccent["100"]}`,
					}}>
					<Box
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						// borderBottom={`3px solid ${colors.primary[200]}`}
						backgroundColor={colors.blueAccent[600]}
						colors={colors.grey[100]}
						borderRadius={2}
						marginBottom={3}
						p='15px'>
						<Typography
							color={colors.grey[100]}
							variant='h5'
							fontWeight='600'>
							Recent Transactions
						</Typography>
					</Box>
					<Box
						overflow={"auto"}
						height={"80%"}>
						{mockTransactions.map((transaction, i) => (
							<Box
								key={`${transaction.txId}-${i}`}
								display='flex'
								justifyContent='space-between'
								alignItems='center'
								borderBottom={`2px solid ${colors.primary[500]}`}
								sx={{
									":hover": {
										backgroundColor: colors.grey[900],
									},
								}}
								p='15px'>
								<Box>
									<Typography
										color={colors.greenAccent[500]}
										variant='h5'
										fontWeight='600'>
										{transaction.txId}
									</Typography>
									<Typography color={colors.grey[100]}>
										{transaction.user}
									</Typography>
								</Box>
								<Box color={colors.grey[100]}>{transaction.date}</Box>
								<Box
									backgroundColor={colors.greenAccent[500]}
									p='5px 10px'
									borderRadius='4px'>
									${transaction.cost}
								</Box>
							</Box>
						))}
					</Box>
				</Box>

				{/* ROW 3 */}
				<Box
					gridColumn='span 7'
					gridRow='span 3'
					backgroundColor={colors.primary[400]}
					borderRadius={5}
					sx={{
						border: `1px solid ${colors.blueAccent["100"]}`,
					}}>
					<Typography
						variant='h5'
						fontWeight='600'
						sx={{ padding: "30px 30px 0 30px" }}>
						Daily Revenue
					</Typography>
					<Box
						height='85%'
						// mt='-20px'
					>
						<BarChart isDashboard={true} />
					</Box>
				</Box>

				<Box
					gridColumn='span 5'
					gridRow='span 3'
					backgroundColor={colors.primary[400]}
					p='30px'
					borderRadius={5}
					sx={{
						border: `1px solid ${colors.blueAccent["100"]}`,
					}}>
					<Typography
						variant='h5'
						fontWeight='600'>
						Revenue Breakdown
					</Typography>
					<Box
						height='80%'
						display='flex'
						flexDirection='column'
						alignItems='center'
						mt='25px'>
						<PieChart isDashboard={true} />
						<Typography
							variant='h5'
							color={colors.greenAccent[500]}
							sx={{ mt: "15px" }}>
							$48,352 revenue generated
						</Typography>
						<Typography>Includes extra misc expenditures and costs</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
