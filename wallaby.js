module.exports = function () {
    return {
        files: [
            'lib/use-cases/service-orchestration/service-orchestrator.ts',
        ],

        tests: [
            'lib/use-cases/service-orchestration/service-orchestrator.spec.ts',
            'lib/use-cases/service-orchestration/service-orchestrator.fixture.ts'
        ],
        env: {
            type: 'node'
        },
        testFramework: 'mocha'
    };
};