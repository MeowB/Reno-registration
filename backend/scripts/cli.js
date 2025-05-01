import { Command } from "commander";
import inquirer from "inquirer";
import { cleanDatabase, resetDatabase } from "../utils/dbUtils.js";

const program = new Command();

program
	.command('cleandb')
	.description('Clean the database (soft reset)')
	.action(() => {
		cleanDatabase()
	})

program
	.command('resetdb')
	.description('Reset the database (hard reset)')
	.action(async () => {
		const { confirm } = await inquirer.prompt([
			{
				type: 'confirm',
				name: 'confirm',
				message: 'Are you sure you want to reset the database? This action cannot be undone.',
				default: false
			}
		])
		
		if(confirm) {
			resetDatabase()

		} else {
			console.log('Database reset aborted')
		}
	})


program.parse(process.argv)