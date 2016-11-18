// Javascript Entry Point
import angular from 'angular';
import { MainController } from './maincontroller';

angular
	.module('app', [])
	.controller('MainController', MainController);