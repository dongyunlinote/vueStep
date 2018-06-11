<template>
	<div class="main">
		<h2>slot--使用插槽分发内容（位置、槽口；作用: 占个位置）</h2>
		<!-- 单个插槽 -->
		<div class="part">
			<h3>单个插槽</h3>
		    <SoltVue-One>
		        <p>这是一些初始内容</p>
		    </SoltVue-One>
		</div>

		<!-- 具名插槽 -->
		<SoltVue-Two>
		  <h3 slot="header">作用域插槽</h3>
		  <p>slot根据不同的name名称分发内容，多个插槽可以有不同的名字。</p>
		  <p>仍然可以有匿名的默认插槽，为了找不到匹配的内容片段使用，如果没有默认插槽，这些找不到匹配的内容片段将被抛弃。</p>
		  <p slot="footer">这里有一些联系信息</p>
		</SoltVue-Two>

		<!-- 作用域插槽 -->
		<div class="part">
			<h3>作用域插槽</h3>
			<SoltVue-Three>
		        <template slot-scope="props">
		            <span>lallaa</span>
		            <span>{{ props.text }}</span>
		        </template>
	    	</SoltVue-Three>
		</div>

	</div>
</template>
<style scoped>
	*{ text-align:left; }
</style>
