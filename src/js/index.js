// Javascript Entry Point
import angular from 'angular';
import { MainController } from './maincontroller';
import { UserService } from './user-service';

angular
	.module('app', [])
	.controller('MainController', MainController)
	.service('UserService', UserService);