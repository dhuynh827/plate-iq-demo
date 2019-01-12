<template>
    <div class="dashboard">
        <div id="left-dash" class="component">
            <img src="https://via.placeholder.com/720">
        </div>
        <div id="right-dash" class="component">
            <InvoiceSummary :invoiceData="sampleData"/>
        </div>
    </div>
</template>

<script type="text/javascript">
import InvoiceSummary from '@/components/InvoiceSummary.vue'
const sampleData = {
  'invoiceSummary': {
    'name': 'Freguesia Cheese',
    'type': 'vendor',
    'isMapped': true,
    'invoiceNumber': '00003526',
    'invoiceType': 'Receipt',
    'restaurantName': 'Monty\'s Cheese Shop',
    'postingDate': 'July 15, 2017',
    'invoiceDate': 'July 09, 2017',
    'dueDate': 'September 09, 2017',
    'subtotal': parseFloat(1300.00),
    'tax': parseFloat(26.32),
    'total': parseFloat(10000.00)
  }
}

export default {
  name: 'Main',
  components: {
    InvoiceSummary
  },
  data: function () {
    return {
      'sampleData': sampleData
    }
  }
}
</script>

<style lang="scss">
    @import 'assets/css/main';
</style>
