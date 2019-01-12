<template>
    <div id="history">
        <header>
            <h3>Recent Activity</h3>
        </header>

        <table>
            <tbody>
                <tr>
                    <td class="date">
                        <span>Today</span>
                        <small>09:55 AM</small>
                    </td>
                    <td class="status"><i class="flagged"></i></td>
                    <td class="activity flagged">
                        <span>Flagged by John Doe</span>
                        <small>Lorem ipsum dolor sit amet</small>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'History'
}
</script>

<style lang="scss">
    @import '../assets/css/History';
</style>
