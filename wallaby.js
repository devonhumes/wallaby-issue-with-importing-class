module.exports = function () {
    return {
        files: [
            'lib/use-cases/service-orchestration/service-orchestrator.ts',
            'lib/use-cases/service-orchestration/service-orchestrator.fixture.ts'
        ],

        tests: [
            'lib/use-cases/service-orchestration/service-orchestrator.spec.ts'
        ],
        env: {
            type: 'node'
        },
        testFramework: 'mocha'
    };
};
