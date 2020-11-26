<template>
	<div id="app">
		<h1 class="title title--hidden">Тестовое задание</h1>
		<div class="wrapper">
		<table class="table">
			<thead class="table_head">
				<tr class="table_row">
					<td class="table_cell" v-for="(column, index) in tableColumns" :key="index" >
						<h2 class="cell_title" :class="{'cell_title--center': column.marker === 'image'}">{{ column.title }}</h2>
						<form class="cell_filter" :class="{'cell_filter--disable': column.isEmpty}" v-if="column.hasFilter">
							<label class="filter_input">
								<input type="text" :disabled="column.isEmpty" >
							</label>
							<button class="btn btn-filter" type="button"
									:class="{'btn-filter--active': column.filterOpened}"
									@click="column.filterOpened = !column.filterOpened"
									:disabled="column.isEmpty">
								<Icon name="filter"></Icon>
							</button>
							<div class="filter_extended" v-if="column.filterOpened">
								<p class="filter_condition">Колонка должна:</p>
								<label class="condition_value">
									<select	name="condition">
										<option value="содержать" selected>содержать</option>
										<option value="содержать">содержать</option>
										<option value="содержать">содержать</option>
										<option value="содержать">содержать</option>
									</select>
									<Icon name="arrow-down" class="icon"></Icon>
								</label>
								<label class="condition_value">
									<input type="text" @input.once="column.filterEmpty = !column.filterEmpty">
								</label>
								<div class="condition_more" v-if="!column.filterEmpty">
									<input type="radio" class="visibility-hidden" :name="`condition${column.marker}`" :id="`condition${column.marker}AND`" value="«И»" checked>
									<label :for="`condition${column.marker}AND`">«И»</label>
									<input type="radio" class="visibility-hidden" :name="`condition${column.marker}`" :id="`condition${column.marker}OR`" value="«ИЛИ»">
									<label :for="`condition${column.marker}OR`">«ИЛИ»</label>
								</div>
								<label class="condition_value" v-if="!column.filterEmpty">
									<select	name="condition">
										<option value="содержать" selected>содержать</option>
										<option value="содержать">содержать</option>
										<option value="содержать">содержать</option>
										<option value="содержать">содержать</option>
									</select>
									<Icon name="arrow-down" class="icon"></Icon>
								</label>
								<label class="condition_value" v-if="!column.filterEmpty">
									<input type="text" @change="column.filterEmpty = !column.filterEmpty" placeholder="значение">
								</label>
								<div class="filter_buttons">
									<button class="btn btn-default" type="submit" :disabled="column.filterEmpty">Фильтровать</button>
									<button class="btn btn-default btn-reset" type="reset" v-if="!column.filterEmpty">
										<Icon name="close"></Icon> Сбросить
									</button>
								</div>
							</div>
						</form>
					</td>
				</tr>
			</thead>
			<tbody class="table_body">
				<tr class="table_row" v-for="(product, index) in products" :key="index">
					<td class="table_cell"
						v-for="column in tableColumns"
						:key="column.marker">
						<div class="cell" :class="{'cell--flex': column.marker === 'image'}">
							<div class="cell_checkmark" v-if="column.marker === 'image'">
								<input class="visibility-hidden" type="checkbox" :id="`item${index}`">
								<label class="btn btn-check" :for="`item${index}`">
									<Icon :name="'checkmark'"></Icon>
								</label>
							</div>
							<img :src="`assets/images/image ${product.image}`"
								:alt="product.title"
								class="cell_image"
								v-if="column.marker === 'image'">
							<p class="cell_text" v-if="column.marker !== 'image'"
								:class="{'cell_text--colored': column.marker === 'title' || column.marker === 'category' || column.marker === 'brand'}">
								{{ product[column.marker] }}
								<span v-if="column.marker === 'price'">Р</span>
							</p>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Icon from './modules/ml-components/icon'

export default {
	name: 'App',
	components: {
		Icon
	},
	data() {
		return {
			...mapState(['status']),
			...mapState(['data']),
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight,
			dataLoaded: false,
			tableColumns: [
				{
					title: 'Фото',
					marker: 'image',
					hasFilter: false,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'SKU',
					marker: 'sku',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Название',
					marker: 'title',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Площадка',
					marker: 'marketplace',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: true
				},
				{
					title: 'Категория',
					marker: 'category',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Брэнд',
					marker: 'brand',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Продавец',
					marker: 'seller',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Цвет',
					marker: 'color',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: true
				},
				{
					title: 'Наличие',
					marker: 'availableCount',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Коммент',
					marker: 'commentsCount',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Рейтинг',
					marker: 'rating',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'СПП',
					marker: 'SPP',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Среднее',
					marker: 'average',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Потенц',
					marker: 'potential',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Цена',
					marker: 'price',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Был в наличии',
					marker: 'wasAvailableCount',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Продаж',
					marker: 'sales',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				},
				{
					title: 'Выручка за 1',
					marker: 'revenueAtOne',
					hasFilter: true,
					filterOpened: false,
					filterEmpty: true,
					isEmpty: false
				}
			]
		}
	},
	computed: {
		...mapGetters(['products']),
		isTablet() {
			let t = false
			if (this.windowWidth < 1024 && this.windowWidth >= 768) {
				t = true
			}
			// this.$emit('update:isTablet', t)
			return t
		},
		isMobile() {
			let m = false
			if (this.windowWidth < 768) {
				m = true
			}
			// this.$emit('update:isMobile', m)
			return m
		}
	},
	methods: {},
	mounted() {
		window.onload = () => {
			if (this.$store.state.status !== null) {
				this.dataLoaded = true
			}
		}
		window.addEventListener('resize', () => {
			this.windowWidth = window.innerWidth
			this.windowHeight = window.innerHeight
			console.log(this.windowHeight, this.windowWidth)
		})
	}
}
</script>

<style lang="scss">
	.component-fade-enter-active, .component-fade-leave-active {
		transition: opacity .3s ease;
	}
	.component-fade-enter, .component-fade-leave-to
		/* .component-fade-leave-active до версии 2.1.8 */ {
		opacity: 0;
	}
	span[mode] {
		display: block;
		margin: 0;
		height: 100%;
	}
</style>
