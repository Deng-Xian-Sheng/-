document.getElementById('dopamine').oninput = function () {
    document.getElementById('dopamine-value').textContent = this.value;
}

document.getElementById('endorphin').oninput = function () {
    document.getElementById('endorphin-value').textContent = this.value;
}

// 继续添加更多滑块的事件监听
document.getElementById('serotonin').oninput = function () {
    document.getElementById('serotonin-value').textContent = this.value;
}

document.getElementById('oxytocin').oninput = function () {
    document.getElementById('oxytocin-value').textContent = this.value;
}

// 定义一个函数来平滑改变数值，使变化更细腻
function ultraSmoothFluctuate(parameterId, valueId) {
    let currentValue = parseFloat(document.getElementById(valueId).textContent);
    const targetValue = () => Math.random() * 100; // 目标值函数，生成一个随机目标值
    let target = targetValue();

    const step = () => {
        // 计算当前值与目标值之间的差距，以此来决定步长
        const gap = target - currentValue;
        if (Math.abs(gap) < 0.1) {
            target = targetValue(); // 如果当前值接近目标值，则生成新的目标值
        } else {
            // 以非常小的步长逐渐接近目标值
            currentValue += gap * 0.05; // 调整此系数以改变速度
            document.getElementById(parameterId).value = currentValue;
            document.getElementById(valueId).textContent = currentValue.toFixed(2); // 保留两位小数
        }
    };

    setInterval(step, 50); // 每50毫秒更新一次数值，比之前更频繁
}

// 对每个化学物质调用ultraSmoothFluctuate函数
ultraSmoothFluctuate('dopamine', 'dopamine-value');
ultraSmoothFluctuate('endorphin', 'endorphin-value');
ultraSmoothFluctuate('serotonin', 'serotonin-value');
ultraSmoothFluctuate('oxytocin', 'oxytocin-value');
// 继续为其他化学物质添加调用
